import React, { Component } from "react";
// import templateBuilder from "@babel/template";
import CategoryGroup from "../categoryGroup/categoryGroup";
import Pagination from "../pagination/pagination";
import Favorite from "../favoriteBtn/favorite";
import { getQuotes } from "../../services/quotesService";
import { getCategory } from "../../services/categoryService";
import { paginate } from "../../utils/paginate";

class Quotes extends Component {
  state = {
    quotes: getQuotes(),
    currentPage: 1,
    pageSize: 4
  };

  handleArchive = quote => {
    const quotes = this.state.quotes.filter(q => q._id !== quote._id);
    this.setState({ quotes });
  };

  handleFavorite = quote => {
    const quotes = [...this.state.quotes];
    const index = quotes.indexOf(quote);
    quotes[index] = { ...quotes[index] };
    quotes[index].favorite = !quotes[index].favorite;
    this.setState({ quotes });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleCategorySelect = category => {
    console.log(category);
  };

  render() {
    const { length: count } = this.state.quotes;
    const { pageSize, currentPage, allQuotes } = this.state;

    if (count === 0)
      return <p>You currently have no quotes saved to your user account.</p>;
    const quotes = paginate(allQuotes, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-3" />
        <div className="col">
          <p>Displaying {count} quotes saved on your user account.</p>
          <table className="table">
            <thead>
              <tr>
                <th> Title </th>
                <th> Product Line </th>
                <th> Parts </th>
                <th> Cost </th>
                <th> Favorite </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.quotes.map(quote => (
                <tr key={quote._id}>
                  <td>{quote.title}</td>
                  <td>{quote.category.name}</td>
                  <td>{quote.numberInStock}</td>
                  <td>{quote.dailyRentalRate}</td>
                  <td>
                    <Favorite
                      favorite={quote.favorite}
                      onClick={() => this.handleFavorite(quote)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleArchive(quote)}
                      className="btn btn-danger btn-sm"
                    >
                      Archive
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Quotes;
