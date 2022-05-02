import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
 

export const CategoryCard = () => {
  const { isLoading, isError, filterData } = useSelector((state) => state);

  const { cat } = useParams();
  const dispatch = useDispatch();
 
};