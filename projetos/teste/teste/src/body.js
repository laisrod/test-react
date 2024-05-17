import React from 'react'
import Card from './card'

function body(props) {
  const cardsData = [
    // filmes
    { launchDate: 2008, chronology: 3, dataFirst: "./image/big-poster-filme-iron-man-2008-lo04-tamanho-90x60-cm-marvel.png",category:'filmes', title:'Homen de Ferro', descricao:" O mundo já Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser  ele é obrigado a construir uma arma d+evastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forcas armadas", 
      descricaoDetalhes: 'Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.',avaliacao: 0, critica: 3  },
    { launchDate: 2010, chronology: 5, dataFirst: './image/HOMEM-DE-FERRO-2.png',category:'filmes',  title:'Homen de Ferro 2', descricao: 'O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas' , avaliacao: 4, critica:0  },
    { launchDate: 2011, chronology: 6, dataFirst: './image/Thor_Official_Poster.png', category:'filmes', title:'Thor', descricao: 'Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.', avaliacao: 5, critica: 0  },
    { launchDate: 2011, chronology: 1, dataFirst: './image/capitaoamerica.png', category:'filmes', title:'Capitão América', descricao: 'Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo. ' ,avaliacao: 0, critica: 4 },
    { launchDate: 2019, chronology: 2, dataFirst: './image/capita-marvel.png', category:'filmes', title:'Capitã Marvel', descricao: 'Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.', avaliacao: 0, critica: 4 },

    // personagens
    { launchDate: 2016, chronology: 1, dataFirst: './image/homemAranha.png',category:'personagens' , title:'Homem Aranha', descricao: 'Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.' },
    { launchDate: 2011, chronology: 4, dataFirst: './image/thanos.png', category:'personagens', title:'Thanos', descricao: "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos.  Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.", descricaoDetalhes: 'Aparições: Vingadores Guardiões da Galáxia - vol. I Vingadores - Guerra Infinita Vingadores - Ultimato ',  avaliacao: 4, critica: 0  },
    { launchDate: 2008, chronology: 2, dataFirst: './image/hulk.png',category:'personagens', title:'Hulk', descricao: 'Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.', descricaoDetalhes: 'Aparições: Vingadores Vingadores - Era de Ultron Thor - Ragnarok Vingadores - Guerra Infinita Vingadores - Ultimato ', avaliacao: 4, critica: 0 },
    { launchDate: 2011, chronology: 3, dataFirst: './image/WandaMaximoff.png', category:'personagens', title:'Wanda Maximoff', descricao: 'Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.', descricaoDetalhes: 'Aparições: Vingadores - Era de Ultron Capitão América - Guerra CivilVingadores - Guerra Infinita Vingadores - Ultimato WandaVision', avaliacao: 4 , critica:0},

    // hqs
    { launchDate: 1992, chronology: 2, dataFirst: './image/thorVikings.png',category:'hqs' ,title:'Thor: Vinikings', descricao: 'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.', descricaoDetalhes: 'Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.', avaliacao: 0, critica:5 },
    { launchDate: 1989, chronology: 1, dataFirst: './image/surfistaPrateado.png',category:'hqs', title:'Surfista Prateado: Parábola', descricao: 'O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?', descricaoDetalhes:'',  avaliacao: 4, critica: 0  },
    { launchDate: 2002, chronology: 3, dataFirst: './image/origem.png', category:'hqs', title:'Wolverine: Origens', descricao: 'Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ', descricaoDetalhes:'',  avaliacao: 4, critica:0 },
   
  ]

  return (
    <div id='container'>
      <div>
        <Card cards={cardsData.filter((card) => card.category === props.category)} orderBy={props.orderBy} />
      </div>
    </div>
  )
}

export default body