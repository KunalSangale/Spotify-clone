import { createContext,useContext,useReducer } from "react";
export const DataLayerContext=createContext();
export const DataLayer=({initialState,reducer,children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        {/* children are the components under the DataLayer tag in index.js */}
    </DataLayerContext.Provider>
);

export const useDataLayerValue=()=>useContext(DataLayerContext);