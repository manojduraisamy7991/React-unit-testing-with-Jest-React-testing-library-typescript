/* eslint-disable testing-library/prefer-screen-queries */
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../Button';

afterEach(cleanup);

it('render without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button label="click"></Button>, div);
});

it('renders button correctly', () => {
  const { getByTestId } = render(<Button label="Click"></Button>);
  expect(getByTestId('button')).toHaveTextContent('Click');
});

it('renders button correctly label', () => {
  const { getByTestId } = render(<Button label="save "></Button>);
  expect(getByTestId('button')).toHaveTextContent('save');
});

it('matches snapshot1', () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('matches snapshot2', () => {
  const tree = renderer.create(<Button label="Click"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
