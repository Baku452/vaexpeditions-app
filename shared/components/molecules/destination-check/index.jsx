import Form from 'react-bootstrap/Form';
import { Divider } from '@/components/index.js';

function DestinationCheck({ destination }) {

    return (
        <>
            <label>{destination.name}</label>
            <div className="row">

                {
                    destination.destinations.map(item =>
                        (
                            <Form.Check
                                key={item.code}
                                name={item.name} value={item.title}
                                label={item.title}
                                className="col-lg-2 col-md-3 col-sm-3 col-xs-12"
                            />
                        )
                    )
                }
            </div>
            <Divider />
        </>
    );
}

export { DestinationCheck };
