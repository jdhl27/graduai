
export type LanguageType = {
    id: number;
    name: string;
    language: string;
}

export type LanguageTypeMenu = {
    id: number;
    name: string;
    language: string;
    regular_decription: string;
    about: string;
    region: string;
}

type AdditionalsVariationsType = {
    id: number;
    name: string;
    price: number;
}

type AdditionalsType = {
    id: number;
    name: string;
    price: number;
    variations: AdditionalsVariationsType[];

}

type TagsType = {
    id: number;
    name: string;
    image: string;
}


export type MenuType = {
    id: number | string;
    name: string;
    regular_decription: string;
    categorie_id: number;
    about: string;
    region: string;
    price: number;
    image: string;
    imagehorizontal: string;
    language: LanguageTypeMenu[];
    additionals: AdditionalsType[];
    tags: TagsType[];
    categorie_name: string;
}
export type CategorieAndMenuType = {
    id: number;
    name: string; 
    icon: string; //Name Categorie
    language: LanguageType[],
    menus: MenuType[]
};

