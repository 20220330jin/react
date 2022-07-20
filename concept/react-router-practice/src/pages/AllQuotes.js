import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Jin', text: 'very good!' },
    { id: 'q2', author: 'Kim', text: 'vue is better!' },
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}></QuoteList>
    )
}

export default AllQuotes;