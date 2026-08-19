'use client';import {useState} from 'react';export function useEditor(){const[tabs,setTabs]=useState<any[]>([]);const[active,setActive]=useState('');return{tabs,setTabs,active,setActive}}
