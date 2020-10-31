import React from 'react'
import GyikCategory from '../../components/GYIK/GyikCategory'
import GyikItem from '../../components/GYIK/GyikCategory/GyikItem'

const Gyik = () => {
    return (
        <>
            <section className='gyik-section'>
                <div className='gyik-container'>
                    <h1 className='page-title'>Gyakran ismételt kérdések</h1>
                    <div className='gradient-line' />
                    <GyikCategory title={'Fizetés és kézbesítés'}>
                        <GyikItem 
                            question={'Milyen fizetési lehetőségeim vannak?'} 
                            description={'Aenean aliquam justo ac tortor pellentesque fringilla. Vestibulum sed dui lobortis, ullamcorper augue congue, semper dolor. Pellentesque ut arcu eu ante iaculis porta in sit amet risus. Nunc ut augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis erat non cursus vestibulum. Fusce sed faucibus augue, in ultrices dolor. Maecenas in nunc maximus, facilisis arcu a, convallis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce acvelit congue.'}
                        />
                        <GyikItem 
                            question={'Milyen szállítási opciók vannak?'} 
                            description={'Aenean aliquam justo ac tortor pellentesque fringilla. Vestibulum sed dui lobortis, ullamcorper augue congue, semper dolor. Pellentesque ut arcu eu ante iaculis porta in sit amet risus. Nunc ut augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis erat non cursus vestibulum. Fusce sed faucibus augue, in ultrices dolor. Maecenas in nunc maximus, facilisis arcu a, convallis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce acvelit congue.'}
                        />
                    </GyikCategory>
                    <GyikCategory title={'Problémám merült fel az oldalon'}>
                        <GyikItem 
                            question={'Milyen szállítási opciók vannak?'} 
                            description={'Aenean aliquam justo ac tortor pellentesque fringilla. Vestibulum sed dui lobortis, ullamcorper augue congue, semper dolor. Pellentesque ut arcu eu ante iaculis porta in sit amet risus. Nunc ut augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis erat non cursus vestibulum. Fusce sed faucibus augue, in ultrices dolor. Maecenas in nunc maximus, facilisis arcu a, convallis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce acvelit congue.'}
                        />
                        <GyikItem 
                            question={'Milyen szállítási opciók vannak??'} 
                            description={'Aenean aliquam justo ac tortor pellentesque fringilla. Vestibulum sed dui lobortis, ullamcorper augue congue, semper dolor. Pellentesque ut arcu eu ante iaculis porta in sit amet risus. Nunc ut augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis erat non cursus vestibulum. Fusce sed faucibus augue, in ultrices dolor. Maecenas in nunc maximus, facilisis arcu a, convallis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce acvelit congue.'}
                        />
                    </GyikCategory>
                    <GyikCategory title={'Mit tegyek, ha nem vagyok elégedett a rendelt termékekkel?'}>
                        <GyikItem 
                            question={'Mit tegyek, ha nem vagyis megelégedve a rendelt termékekkel?'} 
                            description={'Aenean aliquam justo ac tortor pellentesque fringilla. Vestibulum sed dui lobortis, ullamcorper augue congue, semper dolor. Pellentesque ut arcu eu ante iaculis porta in sit amet risus. Nunc ut augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis erat non cursus vestibulum. Fusce sed faucibus augue, in ultrices dolor. Maecenas in nunc maximus, facilisis arcu a, convallis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce acvelit congue.'}
                        />
                        <GyikItem
                            question={'Levásárolhatom az összeget, ha nem vagyok megelégedve?'} 
                            description={'Aenean aliquam justo ac tortor pellentesque fringilla. Vestibulum sed dui lobortis, ullamcorper augue congue, semper dolor. Pellentesque ut arcu eu ante iaculis porta in sit amet risus. Nunc ut augue arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus mattis erat non cursus vestibulum. Fusce sed faucibus augue, in ultrices dolor. Maecenas in nunc maximus, facilisis arcu a, convallis lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce acvelit congue.'}
                        />
                    </GyikCategory>
                </div>
            </section>

            
        </>
    )
}

export default Gyik
