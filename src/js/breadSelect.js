export function breadSelect(data) {
  const markup = data
    .map(({ id, name }) => `<option value=${id}>${name}</option>`)
    .join('');
  return markup;
}
