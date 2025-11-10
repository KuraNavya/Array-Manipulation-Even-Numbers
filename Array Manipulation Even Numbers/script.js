function filterEvenNumbers(arr) {
  if (!Array.isArray(arr)) return '[]';
  const evenNumbers = arr.filter(num => num % 2 === 0);
  return `[${evenNumbers.join(', ')}]`;
}

function handleFilter() {
  const input = document.getElementById('arrayInput').value;
  const arr = input.split(',').map(num => Number(num.trim()));
  const result = filterEvenNumbers(arr);
  document.getElementById('result').textContent = result;
}
