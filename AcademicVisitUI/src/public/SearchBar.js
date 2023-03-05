import { Form, Input } from "reactstrap";
const SearchBar = () => {
  return (
    <Form className=" d-flex justify-content-center">
      <div className="d-flex w-50 py-4">
        <Input type="search" placeholder="Search..." className="mx-1" />
        <button className="btn btn-primary w-25">Search</button>
      </div>
    </Form>
  );
};

export { SearchBar };
