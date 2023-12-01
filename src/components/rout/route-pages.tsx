import Additions from "../../pages/Additions/Additions";
import California from "../../pages/California/California";
import Desserts from "../../pages/Desserts/Desserts";
import Drinks from "../../pages/Drinks/Drinks";
import GourmetsChoice from "../../pages/GourmetsChoice/GourmetsChoice";
import Header from "../../pages/Header/Header";
import Home from "../../pages/Home/Home";
import HotsAndSalads from "../../pages/HotsAndSalads/HotsAndSalads";
import Philadelphia from "../../pages/Philadelphia/Philadelphia";
import Promotion from "../../pages/Promotion/Promotion";
import Roles from "../../pages/Roles/Roles";
import Sets from "../../pages/Sets/Sets";
import Soups from "../../pages/Soups/Soups";
import Sushi from "../../pages/Sushi/Sushi";

export const routPages=[
    {path: '/home',element:Home,exact:true},
    {path: '/header',element:Header,exact:true},
    {path: '/additions',element:Additions,exact:true},
    {path: '/california',element:California,exact:true},
    {path: '/desserts',element:Desserts,exact:true},
    {path: '/drinks',element:Drinks,exact:true},
    {path: '/hotsAndSalads',element:HotsAndSalads,exact:true},
    {path: '/philadelphia',element:Philadelphia,exact:true},
    {path: '/roles',element:Roles,exact:true},
    {path: '/sets',element:Sets,exact:true},
    {path: '/soups',element:Soups,exact:true},
    {path: '/sushi',element:Sushi,exact:true},
    {path: '/promotion',element:Promotion,exact:true},
    {path: '/gourmetschoise',element:GourmetsChoice,exact:true},
]