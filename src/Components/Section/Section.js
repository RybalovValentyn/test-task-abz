// import '../../sass/base/_container.scss';

import s from './Section.module.scss'
export function Section({children}) {   

    return(
        <section className={s.container}>
            {children}
        </section>
    )
}