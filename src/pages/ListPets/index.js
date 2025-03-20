import { useEffect, useState } from "react";

import { Container, TitleList, List, RowData, InfoData, ValueData, BtnView } from "../../styles/custom_adm";

// import { MaterialDesignIcons } from "react-native-vector-icons/MaterialDesignIcons";
import { Alert, ScrollView, TouchableOpacity } from "react-native";

import { api } from "../../config/api";

export default function ListPets(){

  const [pets, setPets] = useState([]);

  const getPets = async () => {
    await api.get("/")
      .then((response) =>{
        // console.log(response.data);
        setPets(response.data);
      }).catch((err) =>{
        console.log(err.response);
        if(err.response){
          Alert.alert("Ops")
        }else{
          Alert.alert("Erro: Tente mais tarde");
        }
      });
  }

  useEffect(() => {
    getPets();
  }, []);

return (

    <Container>
      <TitleList>PETS</TitleList>

      <List>
        {pets.map((pet) => {
          return(
            <RowData key={pet.id}>
              <InfoData>
                <ValueData>{ pet.nomePet}</ValueData>
              </InfoData>
              <TouchableOpacity onPress={() => { navigation.navigate('ViewPet')}}>
              <BtnView>
             Visualizar
              </BtnView>
              </TouchableOpacity>
            </RowData>
          )
        })
        }     
      </List>
    </Container>
    
)
};
