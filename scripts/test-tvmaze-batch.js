/**
 * Test TVmaze resolution for priority missing shows
 * Identifies which shows TVmaze cannot resolve (those need hardcoded TMDB paths)
 */
const https = require('https');

function searchTVmaze(title) {
  return new Promise((resolve) => {
    const query = encodeURIComponent(title);
    const url = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
    const req = https.get(url, { timeout: 8000 }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const result = JSON.parse(data);
            const imageUrl = result.image && (result.image.medium || result.image.original);
            resolve({ found: true, url: imageUrl, name: result.name });
          } catch { resolve({ found: false }); }
        } else {
          resolve({ found: false });
        }
      });
    });
    req.on('error', () => resolve({ found: false }));
    req.on('timeout', () => { req.destroy(); resolve({ found: false }); });
  });
}

// Priority shows to test - popular K-dramas without poster paths
const shows = [
  { id: 'my-name', title: 'My Name' },
  { id: 'dp', title: 'D.P.' },
  { id: 'taxi-driver', title: 'Taxi Driver' },
  { id: 'the-devil-judge', title: 'The Devil Judge' },
  { id: 'the-king-eternal-monarch', title: 'The King: Eternal Monarch' },
  { id: 'touch-your-heart', title: 'Touch Your Heart' },
  { id: 'her-private-life', title: 'Her Private Life' },
  { id: 'hwarang', title: 'Hwarang' },
  { id: 'my-roommate-is-a-gumiho', title: 'My Roommate Is a Gumiho' },
  { id: 'start-up', title: 'Start-Up' },
  { id: 'true-beauty', title: 'True Beauty' },
  { id: 'the-world-of-the-married', title: 'The World of the Married' },
  { id: 'when-the-camellia-blooms', title: 'When the Camellia Blooms' },
  { id: 'while-you-were-sleeping', title: 'While You Were Sleeping' },
  { id: 'boys-over-flowers', title: 'Boys Over Flowers' },
  { id: 'secret-garden', title: 'Secret Garden' },
  { id: 'coffee-prince', title: 'Coffee Prince' },
  { id: 'full-house', title: 'Full House' },
  { id: 'the-heirs', title: 'The Heirs' },
  { id: 'pinocchio', title: 'Pinocchio' },
  { id: 'kill-me-heal-me', title: 'Kill Me Heal Me' },
  { id: 'she-was-pretty', title: 'She Was Pretty' },
  { id: 'fight-for-my-way', title: 'Fight for My Way' },
  { id: 'because-this-is-my-first-life', title: 'Because This Is My First Life' },
  { id: 'mr-queen', title: 'Mr. Queen' },
  { id: 'w-two-worlds', title: 'W Two Worlds' },
  { id: 'memories-of-the-alhambra', title: 'Memories of the Alhambra' },
  { id: 'shopping-king-louie', title: 'Shopping King Louie' },
  { id: 'hellbound', title: 'Hellbound' },
  { id: 'happiness-kdrama', title: 'Happiness' },
  { id: 'crash-course-in-romance', title: 'Crash Course in Romance' },
  { id: 'my-demon', title: 'My Demon' },
  { id: 'lovely-runner', title: 'Lovely Runner' },
  { id: 'marry-my-husband', title: 'Marry My Husband' },
  { id: 'doctor-slump', title: 'Doctor Slump' },
  { id: 'when-the-phone-rings', title: 'When the Phone Rings' },
  { id: 'love-to-hate-you', title: 'Love to Hate You' },
  { id: 'king-the-land', title: 'King the Land' },
  { id: 'high-school-king-of-savvy', title: 'High School King of Savvy' },
  { id: 'youth-of-may', title: 'Youth of May' },
  { id: 'black', title: 'Black Korean drama' },
  { id: 'sungkyunkwan-scandal', title: 'Sungkyunkwan Scandal' },
  { id: 'master-of-the-sun', title: "Master's Sun" },
  { id: 'i-hear-your-voice', title: 'I Hear Your Voice' },
  { id: '100-days-my-prince', title: '100 Days My Prince' },
  { id: 'my-id-is-gangnam-beauty', title: 'My ID is Gangnam Beauty' },
  { id: 'love-next-door', title: 'Love Next Door' },
  { id: 'the-atypical-family', title: 'The Atypical Family' },
  { id: 'a-killer-paradox', title: 'A Killer Paradox' },
  { id: 'flex-x-cop', title: 'Flex x Cop' },
];

async function main() {
  const failed = [];
  const resolved = [];

  // Process in batches of 5 (TVmaze rate limit: 20/10s)
  for (let i = 0; i < shows.length; i += 5) {
    const batch = shows.slice(i, i + 5);
    const results = await Promise.all(batch.map(async (show) => {
      const result = await searchTVmaze(show.title);
      return { ...show, ...result };
    }));

    results.forEach(r => {
      if (r.found && r.url) {
        resolved.push(r);
      } else {
        failed.push(r);
      }
    });

    // Rate limit delay
    if (i + 5 < shows.length) {
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  console.log(`\n=== RESULTS ===`);
  console.log(`Resolved by TVmaze: ${resolved.length}`);
  console.log(`FAILED (need TMDB): ${failed.length}`);
  console.log(`\n--- FAILED shows (need hardcoded TMDB paths) ---`);
  failed.forEach(f => console.log(`  ${f.id} | ${f.title}`));
  console.log(`\n--- Resolved shows (TVmaze will handle these) ---`);
  resolved.forEach(r => console.log(`  ${r.id} | ${r.title} -> ${r.name}`));
}

main();
