// 아이템 36 해당 분야의 용어로 타입 이름 짓기

interface Animal {
  name: string;
  endangered: boolean;
  habitat: string;
}

const leopard: Animal {
  name: 'Snow Leopard',
  endangered: false,
  habitat: 'tundra',
};



interface Animal {
  commonName: string;
  genus: string;
  species: string;
  status: ConservationStatus;
  climates: KoppenClimate[];
}
type ConservationStatus = 'EX' | 'EW' | 'CR' | 'EN' | 'VU' | 'NT' | 'LC';
type KoppenClimate = |
  'Af' | 'Am' | 'As' | 'Aw' |
  'BSh' | 'BSk' | 'BWh' | 'BWk' |
  'Cfa' | 'Cfb' | 'Cfc' | 'Csa' | 'Csb' | 'Csc' | 'Cwa' | 'Cwb' | 'Cwc' |
  'Dfa' | 'Dfb' | 'Dfc' | 'Dfd' |
  'Dsa' | 'Dsb' | 'Dsc' | 'Dwa' | 'Dwb' | 'Dwc' | 'Dwd' |
  'EF' | 'ET';
const snowLeopard: Animal = {
  commonName: 'Snow Leopard',
  genus: 'Panthera',
  species: 'Uncia',
  status: 'VU',	                  // 취약종(vulnerable)
  climates: ['ET', 'EF', 'Dfd'],  // 고산대(alpine) 또는 아고산대(subalpine)
};
