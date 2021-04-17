// eslint-disable-next-line no-control-regex
const Pattern = /\d{3}-\d{3}-\d{4}/;

export default function (value: string): boolean {
  return Pattern.test(value);
}
