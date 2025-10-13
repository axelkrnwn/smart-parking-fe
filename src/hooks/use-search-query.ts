import React, { useState } from "react";

const useSearchQuery = () => {
    
    const [query, setQuery] = useState("");
    
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    return {query, onChange}

}

export default useSearchQuery