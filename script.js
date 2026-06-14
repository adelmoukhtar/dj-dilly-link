document.getElementById('saveContact').addEventListener('click', function () {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Dilly;DJ;;;',
    'FN:DJ Dilly',
    'TEL;TYPE=CELL:+966562355979',
    'EMAIL:dillyrhythm@gmail.com',
    'item1.URL:https://instagram.com/dilly.rhytm',
    'item1.X-ABLabel:Instagram',
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'DJ-Dilly.vcf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
});
