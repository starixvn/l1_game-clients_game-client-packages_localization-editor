# Translation Guide


# 1. Text Translation in game-client-base

- **Add text in yaml files in shared-components/translate-data**
    - index.yaml
    ```
    placeBetNextRound:
      key: placeBetNextRound
      value: ""
      type: 2
      isVariant: false
      associations: []
      _variants: []
    ```

    - en.yaml
    ```
    placeBetNextRound:
      key: placeBetNextRound
      value: "Please wait for the next round."
      type: 2
      isVariant: false
      associations: []
      _variants: []
    ```
- **Usage**

  ```
    import { l10n } from "../../shared";    
    l10n.t("placeBetNextRound");
  ```

# 2. Label Translation 
- **Add text in yaml files in shared-components/translate-data**
- **Add L10nLabel to current Label node**
- **Update L10nLabel**
    - Select Key And Save
    - Save Prefab/Scene

# 3. Image Translation
- **Config image to translation in yaml files in shared-components/translate-data with key is image's uuid**
    - index.yaml
    ```
    37e22496-f5c5-49b8-86de-6074d3fe57cb:
      key: 37e22496-f5c5-49b8-86de-6074d3fe57cb
      value: ""
      type: 1
      isVariant: false
      associations:
        - reference: 37e22496-f5c5-49b8-86de-6074d3fe57cb
    _variants: []
    ```
    - en.yaml
    ```
    37e22496-f5c5-49b8-86de-6074d3fe57cb:
      key: 37e22496-f5c5-49b8-86de-6074d3fe57cb
      value: 37e22496-f5c5-49b8-86de-6074d3fe57cb
      type: 1
      isVariant: false
      associations: []
      _variants: []
    ```
- **Update other yaml files manually or use translation editor to translate for this image**
