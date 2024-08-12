export default function handler(req, res) {
    // Check for the X-Forwarded-For header
    let ip = req.ip ? req.ip : req.headers['x-real-ip']
    const forwardedFor = req.headers['x-forwarded-for'];
    console.log('IP:::::::', ip);
    console.log('forwardedFor:::::::', forwardedFor);
    if (!ip && forwardedFor) { 
        const ipAddress = forwardedFor ? forwardedFor.split(',')[0] : req.connection.remoteAddress;
        ip = forwardedFor ? forwardedFor : 'unknown'
 
    }
    
    res.status(200).json({ ip: ip });
  }
