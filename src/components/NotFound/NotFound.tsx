import './_notFound.scss';
import "./_waiting.scss";
import { CircularProgress } from '@mui/material';

// Componente para quando não ouver dados
export function NotFoundData() {
    return (
        <div className='not-found' data-testid="not-found-data-component">
            <h1>
                Nenhum dado encontrado.
            </h1>
        </div>
    )
}

export function Loading() {
    return (
        <div className="not-found" data-testid="loading-component">
            <CircularProgress sx={{ color: '#1D7882' }}/>
        </div>
    )
}