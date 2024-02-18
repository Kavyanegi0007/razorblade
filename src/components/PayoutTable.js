import {
  Table,
  Box,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
  Badge,
  TablePagination,
  TableToolbarActions,
  TableToolbar,
  Button,
  IconButton,
  RefreshIcon,
  MenuDotsIcon,
} from "@razorpay/blade/components";
import "./Payouts.css"; // Import CSS for styling
import React from "react";


const rows = [
  ...Array.from({ length: 20 }, (_, i) => ({
    created_at: new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ),
    amount: ["10,000"][Math.floor(Math.random() * 1)],
    status: ["Queued"][Math.floor(Math.random() * 1)],
    contact: ["Shivam Arora", "John Doe", "Jane Doe", "Johny Bravo", "Peter Dinklage", "Bruce Wayne", "Michael Scott"][Math.floor(Math.random() * 2)],
    created_by: ["Aditya Sharma", "Aditya Sharma", "Aditya Sharma", "Aditya Sharma", "Aditya Sharma", "Aditya Sharma", "Aditya Sharma", "Aditya Sharma"][Math.floor(Math.random() * 7)],
    utr: "-",
  })),
]

const data = {
  nodes: rows,
};

function PayoutTable() {
  return (
    <div className="payouts">
      <Box padding="spacing.5" overflow="auto" minHeight="400px">
        <Table
          data={data}
          sortFunctions={{
            AMOUNT: (array) => array.sort((a, b) => a.amount - b.amount),
            CONTACT: (array) =>
              array.sort((a, b) => a.contact.localeCompare(b.contact)),
            CREATED_BY: (array) =>
              array.sort((a, b) => a.created_by.localeCompare(b.created_by)),
            CREATED_AT: (array) =>
              array.sort((a, b) => a.created_at.getTime() - b.created_at.getTime()),
            UTR: (array) =>
              array.sort((a, b) => a.utr.localeCompare(b.utr)),
            STATUS: (array) =>
              array.sort((a, b) => a.status.localeCompare(b.status)),
          }}
          backgroundColor={"intense"}
          height="560px"
          isHeaderSticky={true}
          pagination={
            <TablePagination
              defaultPageSize={10}
              onPageChange={function noRefCheck() {}}
              onPageSizeChange={function noRefCheck() {}}
              showPageNumberSelector
              showPageSizePicker
            />
          }
          toolbar={
            <TableToolbar
              selectedTitle="Showing 1-10 Payouts"
              title="Showing 1-10 Payouts"
            >
              <TableToolbarActions>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ marginRight: 10 }}>
                    <IconButton
                      icon={RefreshIcon}
                      accessibilityLabel="Close"
                      emphasis="intense"
                      onClick={() => console.log("Clicked")}
                      size="large"
                    />
                  </div>

                  <div style={{ marginRight: 10 }}>
                    <IconButton
                      icon={MenuDotsIcon}
                      accessibilityLabel="Menu"
                      onClick={() => console.log("Clicked")}
                      size="large"
                    />
                  </div>
                  <Button marginRight="spacing.2" variant="secondary">
                    Export
                  </Button>
                  <Button>Payout</Button>
                </div>
              </TableToolbarActions>
            </TableToolbar>
          }
        >
          {(tableData) => (
            <>
              <TableHeader>
                <TableHeaderRow>
                  <TableHeaderCell headerKey="CREATED_AT">Created At</TableHeaderCell>
                  <TableHeaderCell headerKey="AMOUNT">Amount</TableHeaderCell>
                  <TableHeaderCell headerKey="STATUS">Status</TableHeaderCell>
                  <TableHeaderCell headerKey="CONTACT">Contact</TableHeaderCell>
                  <TableHeaderCell headerKey="CREATED_BY">Created By</TableHeaderCell>
                  <TableHeaderCell headerKey="UTR">UTR</TableHeaderCell>
                </TableHeaderRow>
              </TableHeader>
              <TableBody>
                {tableData.map((tableItem, index) => (
                  <TableRow key={index} item={tableItem}>
                    <TableCell>
                      {tableItem.created_at?.toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      })}
                    </TableCell>
                    <TableCell>{`₹ ${tableItem.amount.toString()}`}</TableCell>
                    <TableCell>
                      <Badge
                        size="medium"
                        color={
                          tableItem.status === "Completed"
                            ? "positive"
                            : tableItem.status === "Queued"
                            ? "notice"
                            : tableItem.status === "Failed"
                            ? "negative"
                            : "default"
                        }
                      >
                        {tableItem.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{tableItem.contact}</TableCell>
                    <TableCell>{tableItem.created_by}</TableCell>
                    <TableCell>{tableItem.utr}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </Box>
    </div>
  );
}

export default PayoutTable;
