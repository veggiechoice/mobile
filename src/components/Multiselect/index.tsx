import React, { MutableRefObject, useRef } from 'react';
import { StyleSheet } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Container, Label, ButtonRecognize, Row, ListContainer } from './styles';

interface MultiselectComponentProps {
  items: Array<any>;
  onSelectedItemsChange: (items: any) => void;
  selectedItems: string[];
  selectPlaceholder: string;
  height: number;
  recognizeButtonVisible: boolean;
  single?: boolean;
  multiSelectRef: any;
}

const MultiselectComponent:React.FC<MultiselectComponentProps> = ({
   items,
   selectedItems,
   selectPlaceholder,
   onSelectedItemsChange,
   single,
   multiSelectRef
  }) => {
  return (
    <Container>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={multiSelectRef}
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedItems}
          fixedHeight={true}
          single={single || false}

          styleDropdownMenuSubsection={[
            multiselectContainerStyles.content,
            multiselectContainerStyles.container
          ]}
          styleInputGroup={multiselectContainerStyles.content}

          styleListContainer={{
            backgroundColor: '#FFF',
          }}
          styleSelectorContainer={{}}
          fontSize={14}
          tagBorderColor="#283618"
          tagTextColor="#283618"
          tagRemoveIconColor="#283618"
          selectedItemTextColor="#283618"
          styleTextDropdown={{ paddingHorizontal: 8 }}
          styleTextDropdownSelected={{ paddingHorizontal: 20 }}
          selectText={selectPlaceholder}
          searchInputPlaceholderText="Buscar..."
          hideSubmitButton
        />
    </Container>
  );
};

const multiselectContainerStyles = StyleSheet.create({
  container: {

    marginTop: 20
  },
  content: {
    backgroundColor: 'transparent',
    height: 45,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    paddingRight: 30,
    marginTop: 10
  }
})

export default MultiselectComponent;
