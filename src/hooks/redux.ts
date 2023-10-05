import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store';

/* eslint-disable import/prefer-default-export */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
