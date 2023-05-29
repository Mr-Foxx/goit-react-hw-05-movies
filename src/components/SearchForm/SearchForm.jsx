import { Button, Form, Input, DivCenter } from './SearchForm.styled';

const SearchForm = ({ handleChangeInput, nandleSubmit }) => {
  const onChangeInput = event => {
    handleChangeInput(event.target.value.trim());
  };

  const onSubmitForm = event => {
    event.preventDefault();
    nandleSubmit();
  };

  return (
    <DivCenter>
      <Form onSubmit={onSubmitForm}>
        <Input type="text" onChange={onChangeInput} />

        <Button type="submit">Submit</Button>
      </Form>
    </DivCenter>
  );
};

export default SearchForm;
