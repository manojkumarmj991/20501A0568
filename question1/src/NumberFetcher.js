import React, { useState } from 'react';

   function NumberFetcher() {
     const [urls, setUrls] = useState('');
     const [result, setResult] = useState('');

     const fetchNumbers = async () => {
       const urlList = urls.split(',').map(url => url.trim());
       let mergedNumbers = [];

       for (const url of urlList) {
         try {
           const response = await fetch(url);
           const data = await response.json();
           const numbers = data.numbers || [];
           mergedNumbers = [...mergedNumbers, ...numbers];
         } catch (error) {
           console.error(`Error fetching numbers from ${url}:`, error);
         }
       }

       const uniqueNumbers = [...new Set(mergedNumbers)].sort((a, b) => a - b);
       setResult(JSON.stringify({ numbers: uniqueNumbers }, null, 2));
     };

     return (
       <div>
         <h2>Number Management Service</h2>
         <div>
           <label htmlFor="urls">Enter URLs (comma-separated):</label>
           <input
             type="text"
             id="urls"
             value={urls}
             onChange={e => setUrls(e.target.value)}
             placeholder="e.g., http://example.com/api/numbers"
           />
           <button onClick={fetchNumbers}>Fetch Numbers</button>
         </div>
         <div>
           <h3>Result:</h3>
           <pre>{result}</pre>
         </div>
       </div>
     );
   }

   export default NumberFetcher;