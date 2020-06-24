import Crud, { CrudState } from "./crud";
import { Author } from "api/types";


export interface AuthorState extends CrudState<Author> {

}

class AuthorStore extends Crud<Author> {
    

}

export default new AuthorStore();