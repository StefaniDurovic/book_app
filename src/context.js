import React, {useState, useEffect, createContext, useContext, useCallback} from 'react';

const URL = "https://openlibrary.org/search.json?title=";
const AppContext = createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultTitle, setResultTitle] = useState("");

    const fetchBooks = useCallback(async() => {
        
        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;
            // const docs = data.docs;    This is the same as the line above, which is using destructuting assignment.

            if (docs) {
                const newBooks = docs.slice(0,20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if (newBooks.length>1) {
                    setResultTitle("Your search results:");
                } else {
                    setResultTitle("No search results found.")
                }

            } else {
                setBooks([]);
                setResultTitle("No search results found.");
            }

            setLoading(false);

        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);
    
    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value={{loading, books, setSearchTerm, resultTitle, setResultTitle}}>
        {children}
        </AppContext.Provider>
    )
}
    
export const useGlobalContext = () => {
        return useContext(AppContext);
}

export {AppContext, AppProvider};
