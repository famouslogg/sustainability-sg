export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch('https://sustainabilitysg.substack.com/feed', {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const xml = await response.text();
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(xml);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch feed' });
  }
}
