// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('🔥 MIDDLEWARE TRIGGERED:', req.nextUrl.pathname);
  
  const auth = req.headers.get('authorization');
  const credentials = auth?.split(' ')[1];
  
  if (credentials) {
    const decoded = Buffer.from(credentials, 'base64').toString();
    const [username, password] = decoded.split(':');
    
    // Require BOTH username AND password
    if (username === process.env.ADMIN_USER && password === process.env.SIMPLE_PW) {
      return NextResponse.next();
    }
  }

  const res = NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  res.headers.set('WWW-Authenticate', 'Basic realm="Protected Area"');
  return res;
}

export const config = { 
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
