import React, {useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function InputDatePicker(): JSX.Element {
  const [open, setOpen] = useState(false);

  const toggleSelector = (): void => {
    setOpen(!open);
  };

  return (
    <View>
      <View>
        <View>
          <Pressable onPress={toggleSelector} style={{height: 54}}>
            <TextInput
              editable={false}
              value="click here"
              pointerEvents="none"
              style={{backgroundColor: '#FFFFFF', height: 54}}
            />
          </Pressable>
          <DatePicker
            modal
            mode="date"
            cancelText="Cancelar"
            confirmText="Confirmar"
            theme="auto"
            title={null}
            locale="es-es"
            open={open}
            date={new Date()}
            onConfirm={(): void => {
              console.log('onConfirm');
            }}
            onCancel={(): void => {
              toggleSelector();
            }}
          />
        </View>
      </View>
    </View>
  );
}
