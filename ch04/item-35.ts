// 아이템 35 데이터가 아닌, API와 명세를 보고 타입 만들기

function calculateBoundingBox(f: Feature): BoundingBox | null {
  let box: BoundingBox | null = null;

  const helper = (coords: any[]) => {
    // ...
  };

  const {geometry} = f;
  if (geometry) {
    helper(geometry.coordinates);
  }

  return box;
}



// $ npm install --save-dev @types/geojson
// + @types/geojson@7946.0.7



import {Feature} from 'geojson';

function calculateBoundingBox(f: Feature): BoundingBox | null {
  let box: BoundingBox | null = null;

  const helper = (coords: any[]) => {
    // ...
  };

  const {geometry} = f;
  if (geometry) {
    helper(geometry.coordinates);
                 // ~~~~~~~~~~~
                 // 'Geometry' 형식에 'coordinates' 속성이 없습니다.
                 // 'GeometryCollection' 형식에
                 // 'coordinates' 속성이 없습니다.
  }

  return box;
}



const {geometry} = f;
if (geometry) {
  if (geometry.type === 'GeometryCollection') {
    throw new Error('GeometryCollection are not supported.');
  }
  helper(geometry.coordinates);  // 정상
}



const geometryHelper = (g: Geometry) => {
  if (geometry.type === 'GeometryCollection') {
    geometry.geometries.forEach(geometryHelper);
  } else {
    helper(geometry.coordinates);  // 정상
  }
}

const {geometry} = f;
if (geometry) {
  geometryHelper(geometry);
}



query {
  repository(owner: "Microsoft", name: "TypeScript") {
    createdAt
    description
  }
}



{
  "data": {
    "repository": {
      "createdAt": "2014-06-17T15:28:39Z",
      "description":
        "TypeScript is a superset of JavaScript that compiles to JavaScript."
    }
  }
}



query getLicense($owner:String!, $name:String!){
  repository(owner:$owner, name:$name) {
    description
    licenseInfo {
      spdxId
      name
    }
  }
}



// $ apollo client:codegen \
//    --endpoint https://api.github.com/graphql \
//    --includes license.graphql \
//    --target typescript
// Loading Apollo Project
// Generating query files with 'typescript' target - wrote 2 files



export interface getLicense_repository_licenseInfo {
  __typename: "License";
  /** Short identifier specified by <https://spdx.org/licenses> */
  spdxId: string | null;
  /** The license full name specified by <https://spdx.org/licenses> */
  name: string;
}

export interface getLicense_repository {
  __typename: "Repository";
  /** The description of the repository. */
  description: string | null;
  /** The license associated with the repository */
  licenseInfo: getLicense_repository_licenseInfo | null;
}

export interface getLicense {
  /** Lookup a given repository by the owner and repository name. */
  repository: getLicense_repository | null;
}

export interface getLicenseVariables {
  owner: string;
  name: string;
}
