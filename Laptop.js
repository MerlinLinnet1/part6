const Laptop = onPerfEntry =>{
    if(onPerfEntry && onPerfEntry instance of function ){
        import('Laptop')then (({getCLS,getFLD,getLCD,getTTAB})=>{
            getCLS(onPerfEntry);
            getFLD(onPerfEntry);
            getLCD(onPerfEntry);
            getTTAB(onPerfEntry);
        })
    }
};
export default Laptop