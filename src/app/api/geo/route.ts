import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET() {
  try {
    const headersList = await headers();
    
    // Try multiple header variations to get the real IP
    const xForwardedFor = headersList.get('x-forwarded-for');
    const xRealIp = headersList.get('x-real-ip');
    const cfConnectingIp = headersList.get('cf-connecting-ip');
    
    const ip = xForwardedFor?.split(',')[0].trim() || 
               xRealIp || 
               cfConnectingIp || 
               '127.0.0.1';

    console.log('Detected IP:', ip); // Debug log
    
    // Use a service that doesn't require an API key
    const response = await fetch(`https://ipwho.is/${ip}`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      console.error('API Response not OK:', await response.text());
      throw new Error('Failed to fetch location data');
    }

    const data = await response.json();
    console.log('Location data:', data); // Debug log

    if (data.success && data.country_code) {
      return NextResponse.json({
        countryCode: data.country_code.toLowerCase(),
        debug: {
          ip,
          country: data.country,
          region: data.region
        }
      });
    }

    throw new Error(data.message || 'No country code in response');
  } catch (error: any) {
    console.error('Error detecting country:', error);
    return NextResponse.json({
      countryCode: null,
      error: error?.message || 'Unknown error',
      debug: { timestamp: new Date().toISOString() }
    });
  }
} 