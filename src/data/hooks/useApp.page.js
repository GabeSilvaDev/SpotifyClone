import { useState } from "react"

const musicList = [
    {
        id: 1,
        name: 'Até que Durou',
        artist: 'Péricles',
        time: 316,
        url: 'musics/atequedurou.mp3',
    },
    {
        id: 2,
        name: 'Onde Anda Você?',
        artist: 'Toquinho e Vinicius de Moraes',
        time: 182,
        url: 'musics/ondeandavoce.mp3',
    },
    
]

export function useApp() {
    const [selectedMusic, setSelectedMusic] = useState();
    const [time, setTime] = useState(0);

    function selectMusic(music) {
        setTime(0);
        setSelectedMusic(music);
    }


    return {
        selectedMusic,
        time,
        setTime,
        selectMusic,
        musicList,
    }
}