import DataForm from '../components/dataform';

jest.mock('../components/tooltip');
jest.mock('../components/error');

const dataForm = new DataForm();

test.each([
	['57.0044169, 86.1301865', {
	 coords:
	   {
		 latitude: '57.0044169',
		 longitude: '86.1301865',
	   },
	}],
	['57.0044169,86.1301865', {
	 coords:
	   {
		 latitude: '57.0044169',
		 longitude: '86.1301865',
	   },
	}],
	['[57.0044169, 86.1301865]', {
	 coords:
	   {
		 latitude: '57.0044169',
		 longitude: '86.1301865',
	   },
	}]])(('возвращает объект с координатами'), (value, expected) => {
	const result = dataForm.checkInput(value);

	expect(result).toEqual(expected);
});
