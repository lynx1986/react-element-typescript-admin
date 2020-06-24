import Crud from '..';
import { inject, observer } from 'mobx-react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Article } from 'api/types';
import { AuthorState } from 'stores/author';

interface DemoAProps extends RouteComponentProps, WithTranslation {
    'author': AuthorState,
}

@inject('author')
@observer
class DemoA extends Crud<DemoAProps, Article> {

    constructor(props: DemoAProps) {
        super(props);

        super.initOptions({ store: props.author }, props.t);
    }
    
}

export default withRouter(withTranslation()(DemoA));;