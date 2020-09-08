import ErrorRepository, { errors } from '../ErrorRepository';

test('Checking an invalid error code', () => {
  const error = new ErrorRepository();
  expect(error.translate(0)).toBe('Unknown error');
});

test.each(errors)(('Checking the error code and text'),
  (code, text) => {
    const error = new ErrorRepository();
    expect(error.translate(code)).toBe(text);
  });
