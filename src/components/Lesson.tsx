import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns'; //ISPAST VERIFICA SE A DATA JA PASSOU
import { Link, useParams } from 'react-router-dom';
import ptBR from 'date-fns/locale/pt-BR';



interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>();

    const isLessonAvailable = isPast(props.availableAt);
    const availableAtDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR,
    }); 

    const isLessonActive = slug === props.slug;

    return (
        <Link to={`/ignite-lab/lesson/${props.slug}`} className="group">
            <span className="text-gray-300 ">
                {availableAtDateFormated.charAt(0).toLocaleUpperCase() + availableAtDateFormated.slice(1)}
            </span>

            <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors ${isLessonActive && 'bg-green-500'}`}>
                <header className="flex items-center justify-between">
                    {isLessonAvailable ? (
                        <span className={`text-sm ${isLessonActive ? 'text-white' : 'text-blue-500'} font-medium flex items-center gap-2`}>
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className={`text-xs rounded px-2 py-[0.125rem] text-white border ${isLessonActive ? 'border-white' : 'border-green-300'} font-bold`}>
                        {props.type === 'live' ? 'AO VIVO' : 'Aula Prática'}
                    </span>
                </header>

                <strong className={`${isLessonActive ? 'text-white' : 'text-gray-200'} mt-5 block`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}