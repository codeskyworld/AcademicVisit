import { RemoveSearch } from "./SearchProcess";
import { Confirm } from "react-st-modal";
import { CustomDialog } from "react-st-modal";
import { SearchDialogContent } from "./SearchDialogContent";
import { Button } from "reactstrap";
import { sortForList } from "../public/Functions";

const SearchTableRender = (searchList) =>
  searchList.sort(sortForList).map((search, index) => {
    return (
      <tr key={index}>
        <th scope="row">{search.id}</th>
        <td>{search.searchName}</td>
        <td>
          {search.searchLinkAddress.length <= 50
            ? search.searchLinkAddress
            : search.searchLinkAddress.slice(0, 50) + "..."}
        </td>
        <td>
          {search.searchIconAddress.length <= 60
            ? search.searchIconAddress
            : search.searchIconAddress.slice(0, 60) + "..."}
        </td>
        <td>{search.searchUpdatingTime}</td>
        <td>
          <Button
            color="success"
            onClick={async () => {
              await CustomDialog(
                <SearchDialogContent
                  id={search.id}
                  searchName={search.searchName}
                  searchLinkAddress={search.searchLinkAddress}
                  searchIconAddress={search.searchIconAddress}
                  searchUpdatingTime={search.searchUpdatingTime}
                />,
                {
                  title: `${search.id}`,
                  showCloseIcon: true,
                }
              );
            }}
          >
            &nbsp;&nbsp;Edit&nbsp;&nbsp;
          </Button>
          &nbsp;&nbsp;
          <Button
            color="danger"
            onClick={async () => {
              const result = await Confirm(
                `Are you sure to delete "${search.searchName}" ?`,
                "Warning"
              );
              if (result) {
                RemoveSearch(search.id);
                window.location.reload(true);
              } else {
                console.log("Deleting is canceled");
              }
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  });

export { SearchTableRender };
