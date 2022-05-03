import { filter } from '@chakra-ui/styled-system';
import { useState, useEffect } from 'react'

import enUs from '../../utils/enUs.json'
import ptBr from '../../utils/ptBr.json'

export function translater(id: string): string {
	const [language, setLanguage] = useState('portuguese');
	const file = language === "portuguese" ? ptBr : enUs;

	useEffect(() => {
		if (localStorage.getItem("@marcella-portfolio/language")) {
			setLanguage(localStorage.getItem("@marcella-portfolio/language").toString());
		}
	}, [])

	return file[id];
}