import React, {useState, useEffect} from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import {commonStyles as stylesCommon} from '@app/styles/common';
import Margin from '@app/components/shared/margin';
import {PropsDropDownsType} from '@app/types/components/forms/dropdowns';

import ChevronRight from '@app/assets/icons/chevron-right.svg';
import {stylesInput} from './styles';

const CustomTextInput = ({
  value,
  label,
  data,
  Icon,
  setValue,
}: PropsDropDownsType) => {
  const commonStyles = stylesCommon();
  const styles = stylesInput();

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [textSearch, setTextSearcg] = useState<string>('');
  const [dataList, setDataList] = useState<
    {
      label: string;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    setDataList(data);
  }, [data]);

  useEffect(() => {
    const filteredData = data.filter((procedure: any) =>
      procedure.label.toLowerCase().includes(textSearch.toLowerCase()),
    );
    setDataList(filteredData);
  }, [textSearch]);

  return (
    <View style={styles.container}>
      <Margin bottom={10} />

      <TouchableOpacity
        style={styles.contentDropDown}
        onPress={() => setModalVisible(true)}>
        {label && <Text style={commonStyles.txt_neutral}>{label}</Text>}
        <Margin top={4} />
        <Text style={[commonStyles.txt_p_regular_light, styles.placeholder]}>
          {value
            ? data.find((item: any) => item.value === value)?.label
            : 'Seleccione'}
        </Text>
        {Icon && <Icon style={styles.chevron} width={25} height={25} />}
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder={'Buscar'}
              placeholderTextColor={'black'}
              style={styles.input}
              value={textSearch}
              onChangeText={setTextSearcg}
            />

            <ScrollView style={styles.contentItems}>
              {dataList.map((item, key) => {
                return (
                  <TouchableOpacity
                    onPress={() => [
                      setValue(item.value),
                      setModalVisible(!modalVisible),
                    ]}
                    style={styles.itemsDropdown}
                    key={key}>
                    <Text style={[commonStyles.txt_p_regular_light]}>
                      {item.label}
                    </Text>
                    <ChevronRight />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomTextInput;
