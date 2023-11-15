import React from 'react';
import Layout from '../components/layout/Layout';
import { Flex, Grid } from '@chakra-ui/react';
const MarketPlace = () => {
    return (
        <Layout title={'NFT MarketPlace'} pagename={'MarketPlace'}>
            <Grid
                gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
                gap={{ base: '20px', xl: '20px' }}
                display={{ base: 'block', xl: 'grid' }}
            >
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}
                    w="100%"
                    h="300px"
                    bg="red"
                    mb={'20px'}
                    
                ></Flex>
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: '1 / 3 / 2 / 4', '2xl': '1 / 2 / 2 / 3' }}
                    w="100%"
                    h="300px"
                    bg="red"
                ></Flex>
            </Grid>
        </Layout>
    );
};
export default MarketPlace;