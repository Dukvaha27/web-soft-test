import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDialogSlct, _setOpenDialog } from "../features/app";

const useOpenDialog = () => {
  const dispatch = useDispatch();
  const openDialog = useSelector(openDialogSlct);

  const setOpenDialog = useCallback(
    (open) => {
      dispatch(_setOpenDialog(open));
    },
    [dispatch]
  );
  return { openDialog, setOpenDialog };
};

export default useOpenDialog;
