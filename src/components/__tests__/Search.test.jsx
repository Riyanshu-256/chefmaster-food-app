import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should filter restaurant list for burger search", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // Initial render → ALL restaurants
  const cardsBeforeSearch = await screen.findAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(8);

  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, {
    target: { value: "burger" },
  });

  fireEvent.click(searchBtn);

  //  After filtering
  const cardsAfterSearch = await screen.findAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1);
});
