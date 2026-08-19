'use client';import {useState} from 'react';export function useToast(){const[message,set]=useState('');return{message,show:(x:string)=>{set(x);setTimeout(()=>set(''),3000)},clear:()=>set('')}}
