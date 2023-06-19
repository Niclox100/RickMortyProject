import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState([]);
    
    

    return [darkMode, setDarkMode]
}

export default useDarkMode