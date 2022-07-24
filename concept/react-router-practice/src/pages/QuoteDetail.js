import { Fragment } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from '../components/comments/Comments'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Jin', text: 'very good!' },
    { id: 'q2', author: 'Kim', text: 'vue is better!' },
]

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();

    console.log(match);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);

    if (!quote) {
        return <p>No quote Found.</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className="btn--flat" to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments></Comments>
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;