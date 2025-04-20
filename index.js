async function request(url, text) {
  result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  });
  return result.json();
}

async function main() {
  const url = 'http://localhost:11434/api/generate';
  const text = {
    model : "deepseek-r1:8B",
    prompt : "Why is the sky blue?"
  }

  try {
    data= await request(url, text);
    console.log('Request sent successfully');
    console.log('Response:', data);
  } catch (error) {
    console.error('Error sending request:', error);
  }
}
main();
